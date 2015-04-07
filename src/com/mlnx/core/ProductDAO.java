package com.mlnx.core;

import java.util.List;
import org.hibernate.LockOptions;
import org.hibernate.Query;
import static org.hibernate.criterion.Example.create;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 	* A data access object (DAO) providing persistence and search support for Product entities.
 			* Transaction control of the save(), update() and delete() operations 
		can directly support Spring container-managed transactions or they can be augmented	to handle user-managed Spring transactions. 
		Each of these methods provides additional information for how to configure it for the desired type of transaction control. 	
	 * @see com.mlnx.core.Product
  * @author MyEclipse Persistence Tools 
 */
public class ProductDAO extends BaseHibernateDAO  {
	     private static final Logger log = LoggerFactory.getLogger(ProductDAO.class);
		//property constants
	public static final String PDU_NAME = "pduName";
	public static final String PDU_IMG = "pduImg";
	public static final String PDU_SIZE = "pduSize";
	public static final String PDU_DETAIL = "pduDetail";
	public static final String PDU_PRIORITY = "pduPriority";
	public static final String PDU_STATUS = "pduStatus";



    
    public void save(Product transientInstance) {
        log.debug("saving Product instance");
        try {
            getSession().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
	public void delete(Product persistentInstance) {
        log.debug("deleting Product instance");
        try {
            getSession().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    public Product findById( java.lang.Integer id) {
        log.debug("getting Product instance with id: " + id);
        try {
            Product instance = (Product) getSession()
                    .get("com.mlnx.core.Product", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    public List<Product> findByExample(Product instance) {
        log.debug("finding Product instance by example");
        try {
            List<Product> results = (List<Product>) getSession()
                    .createCriteria("com.mlnx.core.Product")
                    .add( create(instance) )
            .list();
            log.debug("find by example successful, result size: " + results.size());
            return results;
        } catch (RuntimeException re) {
            log.error("find by example failed", re);
            throw re;
        }
    }    
    
    public List findByProperty(String propertyName, Object value) {
      log.debug("finding Product instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Product as model where model." 
         						+ propertyName + "= ?";
         Query queryObject = getSession().createQuery(queryString);
		 queryObject.setParameter(0, value);
		 return queryObject.list();
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}

	public List<Product> findByPduName(Object pduName
	) {
		return findByProperty(PDU_NAME, pduName
		);
	}
	
	public List<Product> findByPduImg(Object pduImg
	) {
		return findByProperty(PDU_IMG, pduImg
		);
	}
	
	public List<Product> findByPduSize(Object pduSize
	) {
		return findByProperty(PDU_SIZE, pduSize
		);
	}
	
	public List<Product> findByPduDetail(Object pduDetail
	) {
		return findByProperty(PDU_DETAIL, pduDetail
		);
	}
	
	public List<Product> findByPduPriority(Object pduPriority
	) {
		return findByProperty(PDU_PRIORITY, pduPriority
		);
	}
	
	public List<Product> findByPduStatus(Object pduStatus
	) {
		return findByProperty(PDU_STATUS, pduStatus
		);
	}
	

	public List findAll() {
		log.debug("finding all Product instances");
		try {
			String queryString = "from Product";
	         Query queryObject = getSession().createQuery(queryString);
			 return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    public Product merge(Product detachedInstance) {
        log.debug("merging Product instance");
        try {
            Product result = (Product) getSession()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public void attachDirty(Product instance) {
        log.debug("attaching dirty Product instance");
        try {
            getSession().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    public void attachClean(Product instance) {
        log.debug("attaching clean Product instance");
        try {
                      	getSession().buildLockRequest(LockOptions.NONE).lock(instance);
          	            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
}