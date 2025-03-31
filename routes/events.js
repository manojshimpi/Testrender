// routes/events.js

const express = require('express');
const Event = require('../models/Event'); // Import the Event model
const router = express.Router();

// 1. Create a new event
router.post('/events', async (req, res) => {
  try {
    const { name, description, date, location } = req.body;

    // Create a new event instance
    const newEvent = new Event({ name, description, date, location });

    // Save the event to the database
    await newEvent.save();

    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// 2. Get all events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find(); // Find all events
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// 3. Get an event by ID
router.get('/events/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id); // Find event by ID
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

// 4. Update an event by ID
router.put('/events/:id', async (req, res) => {
  try {
    const { name, description, date, location } = req.body;
    
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { name, description, date, location },
      { new: true } // Returns the updated event
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update event' });
  }
});

// 5. Delete an event by ID
router.delete('/events/:id', async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);

    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

module.exports = router;
