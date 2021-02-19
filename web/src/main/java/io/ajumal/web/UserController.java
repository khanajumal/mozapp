package io.ajumal.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.validation.Valid;  
import org.springframework.validation.BindingResult;  

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public List<User> GetUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/{id}")
    public User GetUser(@PathVariable String id) {
        return userRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public User postMethodName(@RequestBody User user) {
        return userRepository.save(user);
    }
    
    
}
