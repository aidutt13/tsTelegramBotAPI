export type integer = number;
export type NotImplemented = undefined;

export interface DefaultTelegramAPIResponse<ResultType> {
    ok: boolean,
    result?: ResultType
}

export interface User {
    id: integer,
    isBot: boolean,
    firstName: string,
    lastName?: string,
    username?: string,
    languageCode?: string,
    canJoinGroups?: boolean,
    canReadAllGroupMessages?: boolean,
    supportsInlineQueries?: boolean
}

export interface Chat {
    id: integer,
    type: string,
    title?: string,
    username?: string,
    firstName?: string,
    lastName?: string,
    photo?: NotImplemented,
    bio?: string,
    description?: string,
    inviteLink?: string,
    pinnedMessage?: Message,
    permissions?: ChatPermissions,
    slowModeDelay?: integer,
    stickerSetName?: string,
    canSetStickerSet?: boolean,
    linkedChatId?: integer,
    location?: NotImplemented
}

export interface Message {
    id: integer,
    from?: User,
    senderChat?: Chat,
    date: integer,
    chat: Chat,
    forwardFrom?: User,
    forwardFromChat?: Chat,
    forwardFromMessageId?: integer,
    forwardSignature?: string,
    forwardSenderName?: string,
    forwardDate?: integer,
    replyToMessage?: Message,
    viaBot?: User,
    editDate?: integer,
    mediaGroupId?: string,
    authorSignature?: string,
    text?: string,
    entities?: MessageEntity[],
    animation?: NotImplemented,
    audio?: NotImplemented,
    video?: NotImplemented,
    videoNote?: NotImplemented,
    voice?: NotImplemented,
    caption?: string,
    captionEntities?: MessageEntity[],
    contact?: NotImplemented,
    dice?: NotImplemented,
    game?: NotImplemented,
    poll?: NotImplemented,
    venue?: NotImplemented,
    location?: NotImplemented,
    newChatMembers?: User[],
    newChatTitle?: string,
    newChatPhoto?: NotImplemented,
    deleteChatPhoto?: true,
    groupChatCreated?: true,
    superGroupChatCreated?: true,
    channelChatCreated?: true,
    migrateToChatId?: integer,
    migrateFromChatId?: integer,
    pinnedMessage?: Message,
    invoice?: NotImplemented,
    successfulPayment?: NotImplemented,
    connectedWebsite?: string,
    passportData?: NotImplemented,
    proximityAlertTriggered?: NotImplemented,
    replyMarkup?: InlineKeyboardMarkup
}

export interface MessageEntity {
    type: string,
    offset: integer,
    length: integer,
    url?: string,
    user?: User,
    language?: string
}

export interface ChatPermissions {

}

export interface InlineKeyboardMarkup {
    inlineKeyboard: InlineKeyboardButton[][]
}

export interface InlineKeyboardButton {
    text: string,
    url?: string,
    loginUrl?: NotImplemented,
    callbackData?: string,
    switchInlineQuery?: string,
    switchInlineQueryCurrentChat?: string,
    callbackGame?: NotImplemented,
    pay?: boolean
}

export interface ReplyKeyboardMarkup {
    keyboard: KeyboardButton[][],
    resizeKeyboard?: boolean,
    oneTimeKeyboard?: boolean,
    selective?: boolean
}

export interface KeyboardButton {
    text: string,
    requestContact?: boolean,
    requestLocation?: boolean,
    requestPoll?: KeyboardButtonPollType
}

export interface KeyboardButtonPollType {
    type: string
}

export interface ReplyKeyboardRemove {
    removeKeyboard: true,
    selective?: boolean
}