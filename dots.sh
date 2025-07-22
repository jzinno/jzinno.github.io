#! /bin/bash

if [ "$EUID" -ne 0 ]; then
    SUDO="sudo"
else
    SUDO=""
fi

bash <(curl -s https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch)

$SUDO apt update -y && $SUDO apt upgrade -y && $SUDO apt install zsh bat -y

curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz
$SUDO rm -rf /opt/nvim
$SUDO tar -C /opt -xzf nvim-linux-x86_64.tar.gz

git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"

for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/*; do
  if [ "$(basename "$rcfile")" != "README.md" ]; then
    ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.$(basename "$rcfile")"
  fi
done

echo "export PATH=\"$PATH:/opt/nvim-linux-x86_64/bin\"" >> ~/.zshrc

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >> ~/.zshrc

git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
echo 'source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh' >> ~/.zshrc

git clone https://github.com/supercrabtree/k.git $HOME/k
echo "source ~/k/k.sh" >> ~/.zshrc
echo "alias k='k -h' >> ~/.zshrc

git clone https://github.com/jzinno/kickstart.nvim.git "${XDG_CONFIG_HOME:-$HOME/.config}"/nvim
echo "alias vi='nvim'" >> $HOME/.zshrc

curl -LsSf https://astral.sh/uv/install.sh | sh
echo 'source $HOME/.local/bin/env' >> ~/.zshrc
echo 'alias bat="batcat --paging=never"' >> ~/.zshrc
