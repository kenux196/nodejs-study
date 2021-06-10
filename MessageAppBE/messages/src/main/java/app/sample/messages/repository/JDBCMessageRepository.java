package app.sample.messages.repository;

import app.sample.messages.domain.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.*;

@Slf4j
@RequiredArgsConstructor
@Repository
public class JDBCMessageRepository {

    private final DataSource dataSource;

    public Message saveMessage(Message message) {
        log.info("Saved message: " + message.getText());
        Connection connection = DataSourceUtils.getConnection(dataSource);

        try {
            String insertSql = "insert into messages (message, created_date) values (?, ?);";
            PreparedStatement ps = connection.prepareStatement(insertSql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, message.getText());
            ps.setTimestamp(2, Timestamp.valueOf(message.getCreateDate()));
            int rowsAffected = ps.executeUpdate();

            if (rowsAffected > 0) {
                ResultSet result = ps.getGeneratedKeys();
                if (result.next()) {
                    long id = result.getLong(1);
                    return new Message(id, message.getText(), message.getCreateDate());
                } else {
                    log.error("Failed to retrieve id. No row in result set");
                    return null;
                }
            } else {
                // insert failed.
                return null;
            }
        } catch (SQLException ex) {
            log.error("Failed to save message : ", ex);
            try {
                connection.close();
            } catch (SQLException e) {
                log.error("Failed to close connection : ", e);
            }
        } finally {
            DataSourceUtils.releaseConnection(connection, dataSource);
        }
        return null;
    }
}
