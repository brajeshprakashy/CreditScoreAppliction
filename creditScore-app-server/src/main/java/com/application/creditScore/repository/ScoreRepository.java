package com.application.creditScore.repository;

import com.application.creditScore.model.CreditScore;


import org.springframework.data.jpa.repository.JpaRepository;


public interface ScoreRepository extends JpaRepository<CreditScore, Long>{
	CreditScore findByUsername(String username);

}
