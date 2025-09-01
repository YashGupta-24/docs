package docs.backend.server.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import docs.backend.server.Model.Doc;

public interface DocRepository extends MongoRepository<Doc, Long> {
    
}
