import * as React from 'react';
import {
  useHideDifficultySetting,
  useHideModulesSetting,
  useSetHideDifficultySetting,
  useSetHideModulesSetting,
  useSetShowIgnoredSetting,
  useSetShowTagsSetting,
  useShowIgnoredSetting,
  useShowTagsSetting,
} from '../../context/UserDataContext/properties/simpleProperties';
import Switch from '../elements/Switch';

export default function General(): JSX.Element {
  // todo: I think we should actually just use one massive useUserSettings() hook lol
  const showIgnored = useShowIgnoredSetting();
  const setShowIgnored = useSetShowIgnoredSetting();
  const showTags = useShowTagsSetting();
  const setShowTags = useSetShowTagsSetting();
  const hideDifficulty = useHideDifficultySetting();
  const setHideDifficulty = useSetHideDifficultySetting();
  const hideModules = useHideModulesSetting();
  const setHideModules = useSetHideModulesSetting();
  const [isLongPolling, setIsLongPolling] = React.useState<boolean>(false);
  /**
   * For people behind proxies or with terrible internet - behold the power of long polling!
   */
  React.useEffect(() => {
    if (localStorage.getItem('USACO_GUIDE_LONG_POLLING') === 'true') {
      setIsLongPolling(true);
    } else {
      setIsLongPolling(false);
    }
  }, []);

  React.useEffect(() => {
    if (isLongPolling) {
      localStorage.setItem('USACO_GUIDE_LONG_POLLING', 'true');
      // console.log('Initializing long polling');
    } else {
      localStorage.setItem('USACO_GUIDE_LONG_POLLING', 'false');
      // console.log('Disabling long polling');
    }
  }, [isLongPolling]);
  return (
    <div>
      <div className="space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          选项
        </h3>
      </div>
      <div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-1-label"
              >
                在问题列表和搜索中显示标签
              </p>
            </div>
            <Switch checked={showTags} onChange={b => setShowTags(b)} />
          </li>
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-1-label"
              >
                在问题列表和搜索在隐藏难度
              </p>
            </div>
            <Switch
              checked={hideDifficulty}
              onChange={b => setHideDifficulty(b)}
            />
          </li>
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-1-label"
              >
                在问题搜索中隐藏模块
              </p>
            </div>
            <Switch checked={hideModules} onChange={b => setHideModules(b)} />
          </li>
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-2-label"
              >
                在仪表板中，显示忽略的问题和错误模块
              </p>
            </div>
            <Switch checked={showIgnored} onChange={b => setShowIgnored(b)} />
          </li>
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-2-label"
              >
                使用 Long Polling（切换后关闭并重新打开选项卡） -{' '}
                <span className="font-bold">
                -仅当您在连接到 Firebase 时遇到问题（未加载任何内容）时才启用此选项。
                </span>
              </p>
            </div>
            <Switch
              checked={isLongPolling}
              onChange={b => setIsLongPolling(b)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
