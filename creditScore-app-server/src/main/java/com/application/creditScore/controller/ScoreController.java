package com.application.creditScore.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.application.creditScore.model.CreditScore;
import com.application.creditScore.repository.ScoreRepository;


@RestController
@RequestMapping("/api")
public class ScoreController {
	
	@Autowired
    private ScoreRepository scoreRepository;
	
	@GetMapping("/user/checkScores")
	public Integer checkScores(@RequestParam(value = "email") String username) {
		
		CreditScore score = scoreRepository.findByUsername(username);
		
		
		return score.getScores();
		
	}

}
