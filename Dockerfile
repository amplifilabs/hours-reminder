FROM amazonlinux:latest

# Install C and wget
RUN yum install gcc44 gcc-c++ libgcc44 make cmake wget -y

# Install node
RUN curl --silent --location https://rpm.nodesource.com/setup_14.x | bash -
RUN yum install nodejs -y && yum install pkgconfig -y && npm install -g node-pre-gyp

# Install serverless
RUN npm install -g serverless

# Install yarn
RUN npm install -g yarn

# Install packages necessary to run containerized VS Code
RUN yum install tar -y && yum install gzip -y

# Install dependencies for CANVAS and FABRIC
RUN yum install cairo-devel libjpeg-turbo-devel pango-devel giflib-devel -y 

WORKDIR /var/task

CMD ["/bin/bash"]