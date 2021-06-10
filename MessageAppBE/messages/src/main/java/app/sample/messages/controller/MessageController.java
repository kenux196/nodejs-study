package app.sample.messages.controller;

import app.sample.messages.domain.Message;
import app.sample.messages.dto.MessageData;
import app.sample.messages.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RequiredArgsConstructor
@Controller
//@ResponseBody
@RequestMapping("/messages")
public class MessageController {

    private final MessageService messageService;

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

    @PostMapping
    @ResponseBody
    public ResponseEntity<Message> saveMessage(@RequestBody MessageData data) {
        Message saved = messageService.save(data.getText());
        if (saved == null) {
            return ResponseEntity.status(500).build();
        }
        return ResponseEntity.ok(saved);
    }
}
