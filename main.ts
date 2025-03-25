import { Plugin } from 'obsidian';
import * as path from 'path';


export default class PathCopyPlugin extends Plugin {

	async onload() {
		await this.loadSettings();


		this.registerEvent(this.app.workspace.on('file-menu', (menu, file, src, leaf) => {
			menu.addItem(item => {
				item.setTitle('Copy as Path')
					.onClick(() => {
						const vaultPath = file.vault.adapter.basePath
						const relativeFilePath = file.path
						const resolvedPath = path.resolve(vaultPath, relativeFilePath)
						// console.log({vaultPath, relativeFilePath, resolvedPath})

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