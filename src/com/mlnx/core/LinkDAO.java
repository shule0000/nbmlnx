package com.mlnx.core;

import java.util.List;
import org.hibernate.LockOptions;
import org.hibernate.Query;
import static org.hibernate.criterion.Example.create;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 	* A data access object (DAO) providing persistence and search support for Link entities.
 			* Transaction control of the save(), update() and delete() operations 
		can directly support Spring container-managed transactions or they can be augmented	to handle user-managed Spring transactions. 
		Each of these methods provides additional information for how to configure it for the desired type of transaction control. 	
	 * @see com.mlnx.core.Link
  * @author MyEclipse Persistence Tools 
 */
public class LinkDAO extends BaseHibernateDAO  {
	     private static final Logger log = LoggerFactory.getLogger(LinkDAO.class);
		//property constants
	public static final String LINK_NAME = "linkName";
	public static final String LINK_URL = "linkUrl";
	public static final String LINK_STATUS = "linkStatus";



    
    public void save(Link transientInstance) {
        log.debug("saving Link instance");
        try {
            getSession().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
	public void delete(Link persistentInstance) {
        log.debug("deleting Link instance");
        try {
            getSession().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    public Link findById( java.lang.Integer id) {
        log.debug("getting Link instance with id: " + id);
        try {
            Link instance = (Link) getSession()
                    .get("com.mlnx.core.Link", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    public List<Link> findByExample(Link instance) {
        log.debug("finding Link instance by example");
        try {
            List<Link> results = (List<Link>) getSession()
                    .createCriteria("com.mlnx.core.Link")
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
      log.debug("finding Link instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Link as model where model." 
         						+ propertyName + "= ?";
         Query queryObject = getSession().createQuery(queryString);
		 queryObject.setParameter(0, value);
		 return queryObject.list();
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}

	public List<Link> findByLinkName(Object linkName
	) {
		return findByProperty(LINK_NAME, linkName
		);
	}
	
	public List<Link> findByLinkUrl(Object linkUrl
	) {
		return findByProperty(LINK_URL, linkUrl
		);
	}
	
	public List<Link> findByLinkStatus(Object linkStatus
	) {
		return findByProperty(LINK_STATUS, linkStatus
		);
	}
	

	public List findAll() {
		log.debug("finding all Link instances");
		try {
			String queryString = "from Link";
	         Query queryObject = getSession().createQuery(queryString);
			 return queryObject.list();
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    public Link merge(Link detachedInstance) {
        log.debug("merging Link instance");
        try {
            Link result = (Link) getSession()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public void attachDirty(Link instance) {
        log.debug("attaching dirty Link instance");
        try {
            getSession().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    public void attachClean(Link instance) {
        log.debug("attaching clean Link instance");
        try {
                      	getSession().buildLockRequest(LockOptions.NONE).lock(instance);
          	            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
}