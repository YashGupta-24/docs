package docs.backend.server.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="docs")
public class Doc {
    @Id
    private long id;
    private String desc;
    private String date;
    private boolean close;
    private Tag tag;
}
