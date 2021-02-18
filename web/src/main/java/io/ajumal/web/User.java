package io.ajumal.web;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.Size;  
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User{
    @Id
    private String id;
    @Size(min=1,message="required")  
    private String Name;
    @Size(min=1,message="required")  
    private String date;
    @Size(min=1,message="required")  
    private String room;
    @Size(min=1,message="required")  
    private String division; 
    @Size(min=1,message="required")  
    private String gender;

}