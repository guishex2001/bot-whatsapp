import { generateRef } from '../../utils/hash'

const eventLocation = (): string => {
    return generateRef('_event_location_')
}

const REGEX_EVENT_LOCATION = /^_event_location__[\w\d]{8}-(?:[\w\d]{4}-){3}[\w\d]{12}/gim

export { eventLocation, REGEX_EVENT_LOCATION }
