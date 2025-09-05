package docs.backend.server.Service;

import java.util.List;
import java.util.Optional;

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

    public Doc getDoc(long id){
        return docRepository.findById(id).orElse(null);
    }

    public Doc saveDoc(Doc doc){
        return docRepository.save(doc);
    }

    public void deleteDoc(long id){
        docRepository.deleteById(id);
    }

    public Doc editDoc(Doc doc, long id){
        Doc curr=getDoc(id);
        if(curr==null){
            return null;
        }
        deleteDoc(id);
        return saveDoc(doc);
    }
}
