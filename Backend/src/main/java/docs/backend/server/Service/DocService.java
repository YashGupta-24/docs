package docs.backend.server.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import docs.backend.server.Model.Doc;
import docs.backend.server.Repository.DocRepository;

@Service
public class DocService {
    @Autowired
    private DocRepository docRepository;

    public List<Doc> getAllDocs(){
        return docRepository.findAll();
    }

    public Doc saveDoc(Doc doc){
        return docRepository.save(doc);
    }

    public void deleteDoc(long id){
        docRepository.deleteById(id);
    }
}
