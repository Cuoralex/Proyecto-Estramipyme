# Proyecto Estramipyme

![Angular](https://img.shields.io/badge/Angular-18-red)
![TypeScript](https://img.shields.io/badge/TypeScript-4-blue)
![SCSS](https://img.shields.io/badge/SCSS-3-pink)
![License](https://img.shields.io/badge/License-MIT-green)

## Descripción

**Proyecto Estramipyme** es una aplicación web desarrollada en Angular 18 diseñada para gestionar las operaciones de una empresa, incluyendo dos tableros (dashboard) distintos para administradores y clientes, manejo de usuarios por parte de managers y administradores, y visualización de métricas de formularios llenados por los clientes.

## Características

- **Dashboard del Administrador**: Visualización de métricas, gestión de usuarios y panel de control.
- **Dashboard del Cliente**: Visualización de métricas personales y panel de control.
- **Manejo de Usuarios**: Administradores y managers pueden gestionar usuarios.
- **Métricas de Formularios**: Formularios llenados por clientes cuyas métricas son visibles para todos los roles.
- **Registro de Usuarios**: Funcionalidad de registro de nuevos usuarios.

## Estructura del Proyecto

```plaintext
ProyectoEstramipyme/
├── e2e/                       
├── node_modules/              
├── src/                       
│   ├── app/                   
│   │   ├── core/              
│   │   │   ├── auth/          
│   │   │   ├── services/      
│   │   │   └── guards/        
│   │   ├── shared/            
│   │   ├── features/          
│   │   │   ├── admin-dashboard/
│   │   │   ├── client-dashboard/
│   │   │   ├── user-management/
│   │   │   └── form-metrics/
│   │   ├── layouts/            
│   │   ├── models/             
│   │   ├── app-routing.module.ts 
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/                 
│   ├── environments/           
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss             
│   └── test.ts
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/ProyectoEstramipyme.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd ProyectoEstramipyme
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Ejecuta la aplicación:
    ```bash
    ng serve
    ```

## Uso

- Accede a `http://localhost:4200` en tu navegador para ver la aplicación en funcionamiento.
- Usa las credenciales proporcionadas para acceder a los diferentes tableros según tu rol.

## Contribuir

¡Contribuciones son bienvenidas! Por favor sigue los pasos a continuación para contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'Agrega nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

- **Autor**: Alexandra Cuartas Orozco
- **Email**: jacuartaso@eafit.edu.co
- **GitHub**: [tu-usuario](https://github.com/Cuoralex)

- **Autor**: Angela Maria Mazo Correa
- **Email**: ammazoc1@eafit.edu.co
- **GitHub**: [tu-usuario](https://github.com/AngelaMazoC)

- **Autor**: Geny Marcela Vargas Suarez
- **Email**: gmvargass@eafit.edu.co
- **GitHub**: [tu-usuario](https://github.com/genyvarsua)

---

¡Gracias por usar **Proyecto Estramipyme**! 💼✨
```
