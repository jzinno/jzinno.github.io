#! /bin/bash

if [ "$EUID" -ne 0 ]; then
    SUDO="sudo"
else
    SUDO=""
fi

bash <(curl -s https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch)

$SUDO apt update -y && $SUDO apt upgrade -y && $SUDO apt install git rsync unzip zsh neofetch -y

curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz
mkdir -p $HOME/.local
rm -rf $HOME/.local/nvim-linux-x86_64
tar -C $HOME/.local -xzf nvim-linux-x86_64.tar.gz
rm nvim-linux-x86_64.tar.gz

git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"

for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/*; do
  if [ "$(basename "$rcfile")" != "README.md" ]; then
    ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.$(basename "$rcfile")"
  fi
done

mkdir -p $HOME/.zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $HOME/.zsh/powerlevel10k
git clone https://github.com/zsh-users/zsh-autosuggestions $HOME/.zsh/zsh-autosuggestions
git clone https://github.com/supercrabtree/k.git $HOME/.zsh/k
git clone https://github.com/jzinno/kickstart.nvim.git "${XDG_CONFIG_HOME:-$HOME/.config}"/nvim

curl -LsSf https://astral.sh/uv/install.sh | sh
curl -sSfL https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh | sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

source $HOME/.cargo/env

curl -L --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash

cargo binstall --no-confirm ripgrep bat fd-find du-dust hyperfine

# Configure .zshrc
echo "# PATH exports" >> $HOME/.zshrc
echo "export PATH=\"$HOME/.local/nvim-linux-x86_64/bin:\$PATH\"" >> $HOME/.zshrc
echo "" >> $HOME/.zshrc

echo "# Tool sources" >> $HOME/.zshrc
echo "source $HOME/.zsh/powerlevel10k/powerlevel10k.zsh-theme" >> $HOME/.zshrc
echo "source $HOME/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh" >> $HOME/.zshrc
echo "source $HOME/.zsh/k/k.sh" >> $HOME/.zshrc
echo "source $HOME/.cargo/env" >> $HOME/.zshrc
echo "eval \"\$(zoxide init zsh)\"" >> $HOME/.zshrc
echo "" >> $HOME/.zshrc

echo "# Aliases" >> $HOME/.zshrc
echo "alias vi='nvim'" >> $HOME/.zshrc
echo "alias bat='bat --paging=never'" >> $HOME/.zshrc
echo "alias k='k -h'" >> $HOME/.zshrc
echo "alias rm='rm -f'" >> $HOME/.zshrc

sed -i '1i command -v neofetch >/dev/null && neofetch' $HOME/.zshrc
