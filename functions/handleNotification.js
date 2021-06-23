import * as Notifications from 'expo-notifications'

export function handleNotificationResponse(response) {
	const {
		actionIdentifier,
		notification: {
			request: {
				content: {
					title,
					sound,
					body,
					data
				},
				identifier
			}
		},
		...rest
	} = response

	Notifications.dismissNotificationAsync(identifier)

	async function handleDismiss() {

	}

	switch (actionIdentifier) {
		case "snooze":
			//default snooze is 10 seconds for now
			Notifications.cancelScheduledNotificationAsync(identifier)
			Notifications.scheduleNotificationAsync({
				content: {
					title: title,
					body: body,
					categoryIdentifier: "alarm"
				},
				trigger: {
					seconds: 10,
					repeats: true
				}
			})
			console.log("user pressed snooze")
			break;

		case "dismiss":
			console.log("user pressed dismiss")
			break;

		default:
			console.log("The default action")
			break;
	}
}
