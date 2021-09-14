package com.application.creditScore.payload;


import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Range;

public class ScoreRequest {
	
	@NotBlank
    @Size(max = 40)
    @Email
    private String email;
	
	@NotNull(message= "scores may not be empty")
	@Range(min=500, max=950)
	private Integer scores;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getScores() {
		return scores;
	}

	public void setScores(Integer scores) {
		this.scores = scores;
	}

	
	
	
}
