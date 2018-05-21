<div class="row justify-content-center text-center">
    <div class="col-sm-8 col-md-6 col-lg-5 col-xl-5">
        <h3 style="font-size: 18px; padding: 10px">Настройки Yandex распознавание речи</h3>
    </div>
</div>

<div class="row justify-content-center text-center">
    <div class="col-sm-8 col-md-6 col-lg-5 col-xl-5">
        <form name="settings_yandex_sp" action="javascript:void(null);" onsubmit="SetSPYandexSettings()" method="POST" style="padding-bottom: 10px;">

            <div class="form-group">
                <label for="key">Key</label>
                <input type="text" class="form-control" name="key" value="{{.Key}}" placeholder="key" id="key_yandex_sp" required>
            </div>
            <div class="row justify-content-center text-center">
                <div class="col-sm-8 col-md-6 col-lg-5 col-xl-5">
                    <a href="https://developer.tech.yandex.ru/">Зарегистрировать key от яндекс</a></br>
                    <p style="font-size: 18px; padding: 10px">
                        Зарегистрируйтесь или войдите и выберите ключ для SpeechKit Cloud</br>
                        Цена в месяц 200р. (1000 распознаваний)
                    </p>
                </div>
            </div>

            <div class="form-group">
                <label for="uuid">UUID</label>
                <input type="text" class="form-control" name="uuid" value="{{.UUID}}" placeholder="uuid" id="uuid_yandex_sp" required>
            </div>

            <div class="btn-group">
                <button type="button" id="lang_yandex_sp_settings_but" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{.Lang}}
                    </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(null);" onclick="yandex_lang_sp_settings('ru-RU')">ru-RU</a>
                    <a class="dropdown-item" href="javascript:void(null);" onclick="yandex_lang_sp_settings('en-US')">en-US</a>
                    <a class="dropdown-item" href="javascript:void(null);" onclick="yandex_lang_sp_settings('uk-UK')">uk-UK</a>
                    <a class="dropdown-item" href="javascript:void(null);" onclick="yandex_lang_sp_settings('tr-TR')">tr-TR</a>
                </div>
            </div>

            <div class="btn-group">
                <button type="button" id="topic_yandex_sp_settings_but" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{.Topic}}
                        </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="javascript:void(null);" onclick="yandex_topic_sp_settings('queries')">queries</a>
                    <a class="dropdown-item" href="javascript:void(null);" onclick="yandex_topic_sp_settings('maps')">maps</a>
                </div>
            </div>

            <div id="alert_settings_yandex_sp_err" class="alert alert-danger alert-dismissable" role="alert">
                <strong>Error!</strong> Некорректные данные.
            </div>
            <div id="alert_settings_yandex_sp_ok" class="alert alert-success alert-dismissable" role="alert">
                <strong>Ok!</strong> Сохранено.
            </div>
            <button type="submit" class="btn btn-primary">Сохранить</button>
        </form>
    </div>
</div>

<script>
    var yandexSoundParsingSettings = {
        key: '{{.Key}}',
        lang: '{{.Lang}}',
        topic: '{{.Topic}}',
        uuid: '{{.UUID}}'
    }

    $("#alert_settings_yandex_sp_err").hide();
    $("#alert_settings_yandex_sp_ok").hide();

    function yandex_lang_sp_settings(lang) {
        $('#lang_yandex_sp_settings_but').html(lang);
        yandexSoundParsingSettings.lang = lang;
    }

    function yandex_topic_sp_settings(topic) {
        $('#topic_yandex_sp_settings_but').html(topic);
        yandexSoundParsingSettings.topic = topic;
    }

    function SetSPYandexSettings() {
        yandexSoundParsingSettings.key = $('#key_yandex_sp').val()
        yandexSoundParsingSettings.uuid = $('#uuid_yandex_sp').val()

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
                $("#alert_settings_yandex_sp_err").hide();
                $("#alert_settings_yandex_sp_ok").hide();
                if (this.status == 200) {
                    $("#alert_settings_yandex_sp_ok").hide().show('medium');
                } else {
                    $("#alert_settings_yandex_sp_err").hide().show('medium');
                    if (this.responseText !== "") {
                        $("#alert_settings_yandex_sp_err").html("Error: " + this.responseText);
                    }
                }
            }
        };

        xhr.open("POST", "/soundparsing/settings?id={{.NameID}}", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            key: yandexSoundParsingSettings.key,
            lang: yandexSoundParsingSettings.lang,
            topic: yandexSoundParsingSettings.topic,
            uuid: yandexSoundParsingSettings.uuid
        }));
    }
</script>