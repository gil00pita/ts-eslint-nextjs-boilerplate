"use client"

import Emoji, { emojis } from "@tiptap/extension-emoji"

import { RichTextEditor } from "@/ui/rich-text-editor"
import StarterKit from "@tiptap/starter-kit"
import { createEmojiSuggestionConfig } from "@/ui/rich-text-editor-menu"
import { useEditor } from "@tiptap/react"

export const RichTextEditorWithEmoji = () => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Emoji.configure({
				emojis,
				enableEmoticons: true,
				suggestion: createEmojiSuggestionConfig(emojis),
			}),
		],
		content: `<p>Type <strong>:</strong> to insert an emoji, like :smile: or :heart:</p><p>You can also use emoticons like :) or &lt;3</p>`,
		shouldRerenderOnTransaction: true,
		immediatelyRender: false,
	})

	if (!editor) return null

	return (
		<RichTextEditor.Root editor={editor} rounded='md'>
			<RichTextEditor.Content />
		</RichTextEditor.Root>
	)
}
