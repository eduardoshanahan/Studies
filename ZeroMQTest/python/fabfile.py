from fabric.api import task, env, sudo

@task
def guest_vagrant():
	env.hosts = ['localhost']
	env.user = 'vagrant'
	env.password = 'vagrant'

@task
def zeromq():
	sudo('pip install pyzmq-static')