import * as React from 'react';
import {
  LANGUAGE_LABELS,
  useSetUserLangSetting,
  useUserLangSetting,
} from '../../context/UserDataContext/properties/simpleProperties';
import RadioList from '../elements/RadioList';

export default function Language() {
  const lang = useUserLangSetting();
  const setLang = useSetUserLangSetting();

  return (
    <div>
      <div className="space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          首选语言
        </h3>
      </div>
      <div className="h-4" />
      <RadioList
        name="language"
        options={['cpp', 'java', 'py'
      ]}
        value={lang}
        onChange={setLang}
        labelMap={LANGUAGE_LABELS}
        descriptionMap={{
          java: '目前我们对java的支持十分有限',
          py: '目前我们对python的支持十分有限，也不建议采用先学python再学c++的计划',
        }}
      />
    </div>
  );
}
