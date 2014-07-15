from fabric.api import run
from fabric.api import task
from fabric.api import sudo
from fabric.api import cd
from fabric.api import put

def host_type():
    run('uname -s')

@task
def ubuntu_update():
    """
    Ubuntu full update
    """
    run('mkdir -p ~/tmp')
    sudo('apt-get clean')
    sudo('rm -rf /var/lib/apt/lists/*')
    sudo('apt-get clean')
    sudo('apt-get update')
    sudo('apt-get install python-software-properties -y ')
    sudo(('DEBIAN_FRONTEND=noninteractive apt-get -y '
          '-o Dpkg::Options::="--force-confdef" '
          '-o Dpkg::Options::="--force-confold" dist-upgrade'))


@task
def install_nginx():
    """
    Nginx from source
    """
    version = '1.4.1'
    url = 'http://nginx.org/download/nginx-{0}.tar.gz'.format(version)
    sudo('apt-get install -y libpcre3')
    sudo('apt-get install -y libpcre3-dev')
    sudo('apt-get install -y libssl-dev')
    sudo('apt-get install -y zlib1g')
    sudo(('adduser --system --no-create-home --disabled-login '
          '--disabled-password --group nginx'))
    sudo('mkdir -p /var/www')
    run('mkdir -p ~/tmp')
    run('wget -P ~/tmp {0}'.format(url))
    with cd('~/tmp'):
        run('tar xvzf nginx-{0}.tar.gz'.format(version))
    with cd('~/tmp/nginx-{0}'.format(version)):
        run(('./configure --prefix=/opt/nginx --user=nginx '
             '--group=nginx --with-http_ssl_module '
             '--without-http_scgi_module '
             '--without-http_uwsgi_module '
             '--without-http_fastcgi_module'))
        run('make')
        sudo('make install')
    run('rm -rf ~/tmp')
    put('../etc-init.d-nginx', '/etc/init.d/nginx', use_sudo=True)
    sudo('chmod +x /etc/init.d/nginx')
    sudo('update-rc.d nginx defaults')
    sudo('service nginx start')


@task
def configure_nginx():
    """"
    Create the config file to host the application
    """
    sudo('touch /opt/nginx/conf/nginx.conf')
    sudo('mkdir -p /opt/nginx/conf/backup')
    sudo(
        'mv --backup=numbered /opt/nginx/conf/nginx.conf /opt/nginx/conf/backup')
    put('../nginx.conf', '/opt/nginx/conf/nginx.conf', use_sudo=True)
    sudo('service nginx stop')
    sudo('service nginx start')


@task
def install_docker():
    """
    Install Docker.io
    """
    sudo('apt-get install docker.io -y')
    sudo('ln -sf /usr/bin/docker.io /usr/local/bin/docker')
    sudo("sed -i '$acomplete -F _docker docker' /etc/bash_completion.d/docker.io")


@task
def install_openjdk():
    sudo('apt-get install -y openjdk-7-jdk')


@task
def install_kafka():
    sudo('wget http://www.whoishostingthis.com/mirrors/apache/kafka/0.8.1/kafka_2.9.2-0.8.1.1.tgz')
    