fx_version "cerulean"

description "[FiveM] Simple Coords Menu"
author "L0rDw1z"
version '1.0.0'

lua54 'yes'

games {
  "gta5",
  "rdr3"
}

ui_page 'web/build/index.html'

client_script "client/**/*"

files {
	'web/build/index.html',
	'web/build/**/*',
}