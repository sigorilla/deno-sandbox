import {
  Controller,
  Get,
  Area,
  App,
} from "https://deno.land/x/alosaur/src/mod.ts";

@Controller("/home")
class HomeController {
  @Get("/text")
  text() {
    return "Hello world";
  }
  @Get("/json")
  json() {
    return { text: "test" };
  }
}

// Declare module
@Area({
  controllers: [HomeController],
})
class HomeArea {}

// Create alosaur application
const app = new App({
  areas: [HomeArea],
});

app.listen();
