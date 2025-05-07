// File: CodeEnglishApplication.java
package com.codeenglish;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CodeEnglishApplication {
    public static void main(String[] args) {
        SpringApplication.run(CodeEnglishApplication.class, args);
    }
}

// File: ChallengeController.java
package com.codeenglish.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class ChallengeController {

    @PostMapping("/submit")
    public Map<String, String> submitSolution(@RequestBody Map<String, String> payload) {
        String code = payload.get("code");
        String feedback = "Thank you! Your submission has been received.";
        // Here you can integrate code evaluation logic or AI feedback
        return Map.of("message", feedback);
    }

    @PostMapping("/chat")
    public Map<String, String> chatWithAI(@RequestBody Map<String, String> payload) {
        String question = payload.get("question");
        // Placeholder for AI integration
        String answer = "'Polymorphism' means an object can take many forms.";
        return Map.of("answer", answer);
    }
}
