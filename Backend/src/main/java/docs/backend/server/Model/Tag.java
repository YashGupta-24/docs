package docs.backend.server.Model;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tag {
    private boolean isOpen;
    private String tagTitle;
    private String tagColor;
}
