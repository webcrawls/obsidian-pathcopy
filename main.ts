import { Plugin } from 'obsidian';
import * as path from 'path';


export default class PathCopyPlugin extends Plugin {

	async onload() {
		await this.loadSettings();


		this.registerEvent(this.app.workspace.on('file-menu', (menu, file, src, leaf) => {

			menu.addItem(item => {
				// const existingIndex = menu.items.findIndex(item => item.dom.innerText === "Copy Obsidian URL")

				item.setTitle('Copy as Path')
					.setIcon('copy')
					.setSection('info')
					.onClick(() => {
						const vaultPath = file.vault.adapter.basePath
						const relativeFilePath = file.path
						const resolvedPath = path.resolve(vaultPath, relativeFilePath)

						navigator.clipboard.writeText(resolvedPath)
					})
			})
		}))
	}

	onunload() {
	}

	async loadSettings() {
	}

	async saveSettings() {
	}
}