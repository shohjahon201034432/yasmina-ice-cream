import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const raw = localStorage.getItem('yasmina-user');
  if (!raw) return next(req);

  const user = JSON.parse(raw) as { token?: string };
  if (!user.token) return next(req);

  const cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${user.token}`
    }
  });

  return next(cloned);
};
