package app.sample.messages.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller
//@ResponseBody
@RequestMapping("/messages")
public class MessageController {

    @GetMapping("/welcome")
//    @ResponseBody
    public String welcome(Model model) {
        model.addAttribute("message", "Hello, Welcome to Spring Boot!!");
        return "welcome";
    }

    @GetMapping("/welcome2")
    public ModelAndView welcome2() {
        ModelAndView mv = new ModelAndView("welcome");
        mv.addObject("message", "Hello, Welcome to Spring Boot!!");
        return mv;
    }
}
