import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActiveTab} = props
  const {tabId} = tabDetails
  const {displayText} = tabDetails
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActiveTab ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
