import { Context, Schema, h } from 'koishi'

export const name = 'bing-wallpaper'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command("必应壁纸")

  ctx.command("必应壁纸.768p")
    .action(({session}) => {
      return h.image("https://bing.img.run/1366x768.php")
    })

  ctx.command("必应壁纸.1080p")
    .action(({session}) => {
      return h.image("https://bing.img.run/1920x1080.php")
    })

  ctx.command("必应壁纸.4k")
    .action(({session}) => {
      return h.image("https://bing.img.run/uhd.php")
    })

  ctx.command("必应壁纸.手机")
    .action(({session}) => {
      return h.image("https://bing.img.run/m.php")
    })
}
