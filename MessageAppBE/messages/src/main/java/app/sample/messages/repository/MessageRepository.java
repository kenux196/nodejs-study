package app.sample.messages.repository;

import app.sample.messages.domain.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
public class MessageRepository {

    public void saveMessage(Message message) {
        log.info("Saved message: " + message.getText());
    }
}
