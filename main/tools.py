from django.conf import settings
from telegram import Bot
from telegram.constants import ParseMode


async def send_to_group(text, chat_id=settings.TELEGRAM_CHAT_ID):
    async with Bot(settings.TELEGRAM_BOT_KEY) as bot:
        # admin user id = 286896743
        await bot.send_message(chat_id, text, parse_mode=ParseMode.MARKDOWN_V2)
