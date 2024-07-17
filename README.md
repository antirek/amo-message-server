# amo-message-server





-----------------------

### пример данных для запроса в поддержку amoCRM на создание канала

1. название Мессенджер
2. https://{domain}/messages/:scope_id
3. доступ для этого аккаунта
4. да, Написать первым нужно
5. нет, временное окно не нужно
6. емейл по всем вопросам dmitriev@mobilon.ru
7. иконка 14x14px приложена *
8. uuid интеграции (clientId): c439f6b2-8d4e-4a27-a9e1-bdd4beb1e406
9. код виджета: mobilon_testdev
10. нет, пока не планируем тиражировать, тестовый аккаунт
11. да, интеграция хранит файлы
12. нет, поддержки реакций нет
13. да, поддержка цитирования нужна
14. нет, поддержка голосовых нет
15. желаемый код канала ru.mobilon.testdev

\* необходимо приложить иконку svg


### пример ответа поддержки
`````
{
  "result": {
    "ru": {
      "id": "CHANNEL_ID",
      "code": "ru.mobilon.testdev",
      "secret_key": "SECRET_KEY",
      "name": "Мессенджер",
      "webhook_url": "https://{domain}/messages/:scope_id",
      "enabled": true,
      "test_mode": false,
      "allowed_acc_list": [        // ограничения по аккаунтам, на других работать не будет
                                   // при публикации необходимо уточнить поддержке снять ограничение
        {
          "id": "2b13cae0-24f7-4058-b9ad-c13ee05e1b53",  // amojo_id аккаунта
          "external_id": "amocrm:31263018"               // id аккаунта
        }
      ],
      "contact_email": "dmitriev@mobilon.ru",
      "created_at": 1721137279,
      "updated_at": 1721137279,
      "widget_code": "mobilon_testdev",
      "supports_reply": true,
      "write_first": true,
      "webhook_url_v2": "https://{domain}/messages/:scope_id",
      "time_window": {
        "enabled": false,
        "expires": 0,
        "tags": null,
        "need_template": false
      },
      "bot": {
        "id": "BOT_ID",
        "name": "Мессенджер",
        "is_bot": true
      },
      "webhook_events": [
        "messages"
      ],
      "saves_files": true,
      "icon": "https://st1.amocrm.ru/origins_icons/ru.mobilon.testdev.svg?1721137279",
      "webhook_v2": true,
      "time_window_support": false,
      "need_display_template": false,
      "time_window_enum": 0,
      "reactions_all": false,
      "reactions_list": "",
      "en_enabled": false,
      "client_uuid": "c439f6b2-8d4e-4a27-a9e1-bdd4beb1e455"
    }
  },
  "error": null
}

`````