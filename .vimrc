" Add this to your vimrc.

:set tabstop=2 shiftwidth=2 expandtab

" Highlight unwanted whitespace.

:highlight ExtraWhitespace ctermbg=red guibg=red
:autocmd ColorScheme * highlight ExtraWhitespace ctermbg=red guibg=red

:match ExtraWhitespace /\s\+\%#\@<!$\|^\t\+/
:autocmd InsertLeave * redraw!
