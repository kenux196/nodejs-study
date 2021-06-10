package app.sample.messages.controller;

import app.sample.messages.domain.Message;
import app.sample.messages.dto.MessageData;
import app.sample.messages.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RequiredArgsConstructor
@Controller
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

    @GetMapping("/messages")
    public String index() {
        return "index";
    }

    @GetMapping("/api/messages")
    public ResponseEntity<List<Message>> getMessages() {
        List<Message> messages = messageService.getMessages();
        return ResponseEntity.ok(messages);
    }

    @PostMapping("/api/messages")
    @ResponseBody
    public ResponseEntity<Message> saveMessage(@RequestBody MessageData data) {
        Message saved = messageService.save(data.getText());
        if (saved == null) {
            return ResponseEntity.status(500).build();
        }
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping(value = "/api/messages")
    public ResponseEntity<String> deleteMessage(@RequestParam(value = "id") long id) {
        messageService.delete(id);
        return ResponseEntity.ok("Removed message: " + id);
    }
}
