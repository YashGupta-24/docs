package docs.backend.server.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import docs.backend.server.Model.Doc;
import docs.backend.server.Service.DocService;

@RestController
public class DocController {
    @Autowired
    private DocService docService;
    
    @GetMapping("/docs")
    public List<Doc> getAllDocs(){
        return docService.getAllDocs();
    }

    @PostMapping("/docs")
    public Doc saveDoc(@RequestBody Doc doc){
        return docService.saveDoc(doc);
    }

    @DeleteMapping("/docs/{id}")
    public void deleteDoc(@PathVariable long id){
        docService.deleteDoc(id);
    }

    @PutMapping("/docs/{id}")
    public Doc editDoc(@RequestBody Doc doc, @PathVariable long id){
        return docService.editDoc(doc, id);
    }
    
}
