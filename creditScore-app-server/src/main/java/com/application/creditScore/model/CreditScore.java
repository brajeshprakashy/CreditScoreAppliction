package com.application.creditScore.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.hibernate.validator.constraints.Range;

import com.application.creditScore.model.audit.DateAudit;

import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "scores", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
            "username"
        })
 })
public class CreditScore extends DateAudit{
	
	@Id
    @Size(max = 40)
    private String username;
	
	@NotNull(message= "scores may not be empty")
	@Range(min=500, max=950)
	private Integer scores;
	
	public CreditScore(String username,Integer scores) {
		this.username = username;
		this.scores = scores;
	}

	public CreditScore() {
		
	}
	
	public String getusername() {
		return username;
	}

	public void setusername(String username) {
		this.username = username;
	}

	public Integer getScores() {
		return scores;
	}

	public void setScores(Integer scores) {
		this.scores = scores;
	}

	
	
	

}
