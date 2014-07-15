from fabric.api import *
from fabric.operations import reboot


env.colorize_errors = True


@task
def install_ghost():
    """
    Install Ghost blog platform
    """
    run('curl -L https://ghost.org/zip/ghost-latest.zip -o ghost.zip')
    sudo('unzip -uo ghost.zip -d /opt/ghost')
    run('rm ghost.zip')
    with cd('/opt/ghost'):
        sudo('npm install --production')


@task
def install_tools():
    """
    Get the tools needed for the OS
    """
    install_nodejs()
    install_curl()
    install_unzip()


@task
def install_unzip():
    """
    Unzip from package
    """
    sudo('apt-get install -y unzip')

@task
def install_curl():
    """
    curl from package
    """
    sudo('apt-get install -y curl')


@task
def install_nodejs():
    """
    NodeJS from external package
    """
    run('mkdir -p ~/tmp')
    sudo('apt-get install -y python-software-properties')
    sudo('apt-get install -y software-properties-common')
    sudo('add-apt-repository -y ppa:chris-lea/node.js')
    sudo('apt-get update')
    sudo('apt-get install -y nodejs')
    run('rm -rf ~/tmp')


@task
def server_reboot():
    """
    Reboot Ubuntu
    """
    reboot()


@task
def fix_vagrant_guest_additions():
    """
    Version 4.3 of Virtual Box makes Vagrant bomb
    """
    local('vagrant plugin install vagrant-vbguest')
    local('vagrant up --no-provision')
    sudo('apt-get -y -q purge virtualbox-guest-dkms')
    sudo('apt-get -y -q purge virtualbox-guest-utils')
    sudo('apt-get -y -q purge virtualbox-guest-x11')
    local('vagrant halt')
    local('vagrant up --provision')


@task
def vagrant():
    """
    Connect to Vagrant from the host machine
    """
    env.user = 'vagrant'
    result = dict(line.split() for line in local(
        'vagrant ssh-config', capture=True).splitlines())
    env.hosts = ['{0}:{1}'.format(result['HostName'], result['Port'])]
    env.key_filename = result['IdentityFile'].replace('"', '')


@task
def server_update():
    """
    Ubuntu full update
    """
    sudo('apt-get clean')
    sudo('rm -rf /var/lib/apt/lists/*')
    sudo('apt-get clean')
    sudo('apt-get update')
    sudo('apt-get install python-software-properties -y ')
    sudo(('DEBIAN_FRONTEND=noninteractive apt-get -y '
          '-o Dpkg::Options::="--force-confdef" '
          '-o Dpkg::Options::="--force-confold" dist-upgrade'))


@task
def update_virtualbox():
    """
    Fix Vagrant in Virtual Box after an update in Ubuntu
    """
    sudo('/etc/init.d/vboxadd setup')
    local('vagrant reload')
