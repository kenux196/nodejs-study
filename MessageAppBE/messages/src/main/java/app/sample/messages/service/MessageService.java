package app.sample.messages.service;

import app.sample.messages.domain.Message;
import app.sample.messages.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final MessageRepository repository;

    public Message save(String text) {
        return repository.saveMessage(new Message(text));
    }
}
