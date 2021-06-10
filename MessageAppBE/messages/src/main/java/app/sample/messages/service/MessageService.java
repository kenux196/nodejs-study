package app.sample.messages.service;

import app.sample.messages.domain.Message;
import app.sample.messages.filter.annotation.SecurityCheck;
import app.sample.messages.repository.JDBCMessageRepository;
import app.sample.messages.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class MessageService {

    private final JDBCMessageRepository jdbcMessageRepository;
    private final MessageRepository messageRepository;

    public Message saveByJDBC(String text) {
        return jdbcMessageRepository.saveMessage(new Message(text));
    }

    @SecurityCheck
    @Transactional(noRollbackFor = { UnsupportedOperationException.class })
    public Message save(String text) {
        Message savedMessage = messageRepository.save(new Message(text));
        log.debug("New message[id={}] saved", savedMessage.getId());
        updateStatistics();
        return savedMessage;
    }

    private void updateStatistics() {
        throw new UnsupportedOperationException("This method is not implemented yet");
    }
}
