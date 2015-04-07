package com.mlnx.core;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Admin entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "admin", catalog = "mlnx")
public class Admin implements java.io.Serializable {

	// Fields

	private Integer adId;
	private String adName;
	private String adPass;

	// Constructors

	/** default constructor */
	public Admin() {
	}

	/** full constructor */
	public Admin(String adName, String adPass) {
		this.adName = adName;
		this.adPass = adPass;
	}

	// Property accessors
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "adID", unique = true, nullable = false)
	public Integer getAdId() {
		return this.adId;
	}

	public void setAdId(Integer adId) {
		this.adId = adId;
	}

	@Column(name = "adName", length = 50)
	public String getAdName() {
		return this.adName;
	}

	public void setAdName(String adName) {
		this.adName = adName;
	}

	@Column(name = "adPass", length = 50)
	public String getAdPass() {
		return this.adPass;
	}

	public void setAdPass(String adPass) {
		this.adPass = adPass;
	}

}