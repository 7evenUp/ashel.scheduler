import {
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import React, { useCallback, useRef } from "react"
import { useTheme } from "@shopify/restyle"
import { Box, Theme } from "../../../../theme/default"
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor"
import { ScrollView } from "react-native-gesture-handler"

const NewTab = () => {
  const theme = useTheme<Theme>()
  let richText = useRef()
  let scrollRef = useRef()

  let handleCursorPosition = useCallback((scrollY: number) => {
    // Positioning scroll bar
    scrollRef.current.scrollTo({ y: scrollY - 30, animated: true })
  }, [])

  return (
    <Box flex={1} paddingHorizontal="xs" mt="l">
      <TextInput
        placeholder="Название"
        placeholderTextColor={theme.colors.supportText}
        selectionColor={theme.colors.accent}
        style={{
          color: theme.colors.mainText,
          fontSize: 18,
          fontFamily: "Inter-Regular",
          padding: theme.spacing.ss,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.supportText,
        }}
      />
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={20}
      >
        <RichEditor
          editorStyle={{
            backgroundColor: theme.colors.mainBackground,
            color: theme.colors.mainText,
            placeholderColor: theme.colors.supportText,
            cssText: `
                * {
                  font-family: Times;
                },

                ul, ol {
                  margin-top: 8px;
                }

                ul li, ol li {
                  margin-bottom: 4px;
                }
              `,
          }}
          ref={richText}
          placeholder="Пиши идею здесь"
          onChange={(text) => console.log(text)}
          onCursorPosition={handleCursorPosition}
        />
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <RichToolbar
          editor={richText}
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.setUnderline,
            actions.setStrikethrough,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.undo,
            actions.redo,
            actions.removeFormat,
          ]}
          iconTint={theme.colors.supportText}
          selectedIconTint={theme.colors.accent}
          selectedButtonStyle={{
            backgroundColor: theme.colors.mainSubBackground,
          }}
          style={{
            backgroundColor: theme.colors.mainBackground,
            borderTopColor: theme.colors.mainSubBackground,
            borderTopWidth: 1,
          }}
        />
      </KeyboardAvoidingView>
    </Box>
  )
}

export default NewTab