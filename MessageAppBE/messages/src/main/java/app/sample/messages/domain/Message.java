package app.sample.messages.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "message", nullable = false, length = 200)
    private String text;

    @Column(name = "created_date", nullable = false)
    private LocalDateTime createDate;

    public Message(String text) {
        this.text = text;
        this.createDate = LocalDateTime.now();
    }
}
