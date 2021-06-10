package app.sample.messages.security;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
public class SecurityChecker {
    @Pointcut("@annotation(app.sample.messages.security.SecurityCheck)")
    public void checkMethodSecurity() {}

    @Around("checkMethodSecurity()")
    public Object checkSecurity(ProceedingJoinPoint joinPoint) throws Throwable{
        log.debug("Checking method security...");
        // TODO : 여기에 보안 검사 로직 구현하기 - skyun 2021/06/11
        return joinPoint.proceed();
    }
}
