# 🚗 Car Service Management Web Application

## 📌 Опис
Оваа веб апликација овозможува корисниците да регистрираат свои автомобили, да закажуваат и следат сервиси, а сервисите да имаат преглед на сите автомобили и нивните сопственици. Апликацијата е изградена со Spring Boot (backend), а frontend-от може да се изработи со React или Vue.js.

---

## 🧱 Технологии
- Java 17
- Spring Boot
- Spring Data JPA (Hibernate)
- PostgreSQL 
- REST API
- React
- Maven 

---

## 🧩 Entity Структура

### 👤 `User`
| Поле      | Тип       | Опис                     |
|-----------|------------|--------------------------|
| username  | String     | Единствено корисничко име |
| name      | String     | Име на корисникот         |
| surname   | String     | Презиме на корисникот     |
| cars      | List<Car>  | Сите автомобили на корисникот |
| services  | List<Service> | Сите сервиси поврзани со корисникот |

- Mechanic → `john`
- User → `user`
- Admin → `admin`
---

### 🚗 `Car`
| Поле         | Тип       | Опис                         |
|--------------|-----------|------------------------------|
| id           | Long      | ID на автомобилот            |
| manufacturer | String  | Производител                 |
| model        | String    | Модел                        |
| year         | int       | Година на производство       |
| currentKm    | int       | Тековна километража          |
| user         | User      | Сопственик                   |
| services     | List<Service> | Сите сервиси на автомобилот |

---

### 🔧 `Service`
| Поле           | Тип               | Опис                          |
|----------------|------------------|-------------------------------|
| id             | Long             | ID на сервисот                |
| price          | double           | Цена                          |
| nextServiceKm  | int              | Следна препорачана километража |
| type           | Enum (ServiceType) | Тип на сервис (пример: OIL_CHANGE) |
| status         | Enum (ServiceStatus) | Статус (пример: COMPLETED) |
| car            | Car              | Автомобилот кој се сервисира |
| user           | User             | Сопственик на сервисираниот автомобил |

---

## 🔁 Релации

- `User` → `Car` → `Service`
- `Service` → `Car` → `User`
- `Car` → `User`, `Service`

## Бизнис логика

- Кога се креира сервис, цената и километражата до следен сервис се пресметуваат автоматски според типот на сервис.
- Корисникот може да откаже (cancel) сервис.
- Механичарот може да започне (start) сервис и да го означи како завршен (complete).
- Администраторите имаат пристап до сите операции.

### Пресметка на цена и километража (пример)

| ServiceType    | Цена (денари) | Следен сервис (км) |
|----------------|---------------|--------------------|
| OIL_CHANGE     | 10,000        | 10,000             |
| BRAKE_SERVICE  | 4,000         | 7,000              |
| GENERAL_CHECKUP| 2,000         | 0                  |
| TIRE_CHANGE    | 1,000         | 0                  |

## Контролери и REST Endpoints

| Endpoint                       | Метод | Опис                          | Дозволени улоги         |
|-------------------------------|--------|------------------------------|-------------------------|
| POST `/services`               | create | Креира нов сервис             | USER, ADMIN             |
| PUT `/services/{id}/confirm`   | update | Потврдување на сервис         | USER, ADMIN             |
| PUT `/services/{id}/cancel`    | update | Откажување на сервис           | USER, ADMIN             |
| PUT `/services/{id}/start`     | update | Почеток на сервисот            | MECHANIC, ADMIN         |
| PUT `/services/{id}/complete`  | update | Завршување на сервисот         | MECHANIC, ADMIN         |
| GET `/services`                | get    | Листирање на сите сервиси      | USER, MECHANIC, ADMIN   |


---
