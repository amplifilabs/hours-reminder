import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"
// import httpMultipartBodyParser from '@middy/http-multipart-body-parser'

export const middyfy = (handler) => {
  return middy(handler).use(middyJsonBodyParser())
}

// export const middyfyMultipart = (handler) => {
//   return middy(handler).use(httpMultipartBodyParser())
// }
