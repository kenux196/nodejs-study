package app.sample.messages.service;

import app.sample.messages.domain.Message;
import app.sample.messages.repository.JDBCMessageRepository;
import app.sample.messages.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageService {

    private final JDBCMessageRepository repository;
    private final MessageRepository messageRepository;

    public Message save(String text) {
//        return repository.saveMessage(new Message(text));
        return messageRepository.save(new Message(text));
    }
}
