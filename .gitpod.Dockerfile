FROM gitpod/workspace-full:latest
RUN sudo install-packages fish
SHELL ["/usr/bin/fish", "-c"]
RUN sudo chsh -s /usr/bin/fish gitpod
RUN curl -fsSL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher
RUN fisher install jhillyerd/plugin-git
USER gitpod

# install deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN /home/gitpod/.deno/bin/deno completions bash > /home/gitpod/.bashrc.d/90-deno && echo 'export DENO_INSTALL="/home/gitpod/.deno"' >> /home/gitpod/.bashrc.d/90-deno &&     echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> /home/gitpod/.bashrc.d/90-deno
